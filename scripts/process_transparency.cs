using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Collections.Generic;

public class ImageTransparency
{
    private static bool IsNearWhite(byte r, byte g, byte b, int threshold)
    {
        return r >= threshold && g >= threshold && b >= threshold;
    }

    public static void Process(string inputPath, string outputPath, int threshold = 238)
    {
        using (Bitmap src = new Bitmap(inputPath))
        {
            int w = src.Width;
            int h = src.Height;
            using (Bitmap dest = new Bitmap(w, h, PixelFormat.Format32bppArgb))
            {
                using (Graphics g = Graphics.FromImage(dest))
                {
                    g.DrawImage(src, 0, 0, w, h);
                }

                BitmapData data = dest.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
                int stride = data.Stride;
                IntPtr scan0 = data.Scan0;
                
                byte[] pixels = new byte[Math.Abs(stride) * h];
                System.Runtime.InteropServices.Marshal.Copy(scan0, pixels, 0, pixels.Length);

                bool[] visited = new bool[w * h];
                Queue<int> q = new Queue<int>();

                // Check and enqueue border pixels
                for (int x = 0; x < w; x++)
                {
                    int topIdx = 0 * stride + x * 4;
                    if (IsNearWhite(pixels[topIdx + 2], pixels[topIdx + 1], pixels[topIdx], threshold))
                    {
                        q.Enqueue(x);
                        visited[x] = true;
                    }
                    int btmY = h - 1;
                    int btmIdx = btmY * stride + x * 4;
                    if (IsNearWhite(pixels[btmIdx + 2], pixels[btmIdx + 1], pixels[btmIdx], threshold))
                    {
                        int pos = btmY * w + x;
                        q.Enqueue(pos);
                        visited[pos] = true;
                    }
                }
                for (int y = 0; y < h; y++)
                {
                    int leftIdx = y * stride + 0 * 4;
                    int leftPos = y * w + 0;
                    if (!visited[leftPos] && IsNearWhite(pixels[leftIdx + 2], pixels[leftIdx + 1], pixels[leftIdx], threshold))
                    {
                        q.Enqueue(leftPos);
                        visited[leftPos] = true;
                    }
                    int rightX = w - 1;
                    int rightIdx = y * stride + rightX * 4;
                    int rightPos = y * w + rightX;
                    if (!visited[rightPos] && IsNearWhite(pixels[rightIdx + 2], pixels[rightIdx + 1], pixels[rightIdx], threshold))
                    {
                        q.Enqueue(rightPos);
                        visited[rightPos] = true;
                    }
                }

                int[] dx = new int[] { 1, -1, 0, 0 };
                int[] dy = new int[] { 0, 0, 1, -1 };

                while (q.Count > 0)
                {
                    int curr = q.Dequeue();
                    int cx = curr % w;
                    int cy = curr / w;

                    int pidx = cy * stride + cx * 4;
                    pixels[pidx + 3] = 0; // Transparent alpha

                    for (int i = 0; i < 4; i++)
                    {
                        int nx = cx + dx[i];
                        int ny = cy + dy[i];
                        if (nx >= 0 && nx < w && ny >= 0 && ny < h)
                        {
                            int npos = ny * w + nx;
                            if (!visited[npos])
                            {
                                int nidx = ny * stride + nx * 4;
                                if (IsNearWhite(pixels[nidx + 2], pixels[nidx + 1], pixels[nidx], threshold))
                                {
                                    visited[npos] = true;
                                    q.Enqueue(npos);
                                }
                            }
                        }
                    }
                }

                System.Runtime.InteropServices.Marshal.Copy(pixels, 0, scan0, pixels.Length);
                dest.UnlockBits(data);
                dest.Save(outputPath, ImageFormat.Png);
            }
        }
    }
}
