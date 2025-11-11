import { pool } from '@/app/lib/client';
import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const client = await pool.connect();
    const { id } = await params;
    try {
        const query = {
            name: 'fetch-news-by-id',
            text: 'SELECT id, title, text FROM news WHERE id = $1 LIMIT 1',
            values: [id],
        };
        const result = await client.query(query);
        return NextResponse.json(result.rows);
    }
    catch (error) {
        return NextResponse.json({ error: 'Database error' });
    }
    finally {
        client.release();
    }
}

