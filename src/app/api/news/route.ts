import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import path from "path";

export function GET(request: NextApiRequest, response: NextApiResponse) {
    try {
        const filePath = path.join(process.cwd(), 'mock/news/data.json');
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(fileContents);
        return NextResponse.json({data});
    } catch (error) {
        return NextResponse.json({error});
    }
}