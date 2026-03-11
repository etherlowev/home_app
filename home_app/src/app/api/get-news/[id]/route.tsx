import { pool } from '@/app/lib/client';
import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    let client = null;
    const { id } = await params;
    try {
        client = await pool.connect();
        const query = {
            name: 'fetch-news-by-id',
            text: 'SELECT id, title, text, short_text, date_posted FROM news WHERE id = $1 LIMIT 1',
            values: [id],
        };
        const result = await client.query(query);
        return NextResponse.json({"success": true, "rows": result.rows});
    }
    catch (error) {
        return NextResponse.json({ "success": false, "error": 'Database error' });
    }
    finally {
        if (client != null) {
            client.release();
        }
    }
}

