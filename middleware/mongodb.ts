import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";

const connectDB =
  (handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (mongoose.connections[0].readyState === 1) {
      // Use current db connection
      return handler(req, res);
    }
    // Use new db connection
    await mongoose.connect(process.env.NEXT_PUBLIC_mongodburl!);

    return handler(req, res);
  };

export default connectDB;
