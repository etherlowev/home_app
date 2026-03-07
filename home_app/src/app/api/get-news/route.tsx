import { pool } from '@/app/lib/client';
import {NextResponse} from "next/server";

export async function GET() {
    let client = null;

    try {
        client = await pool.connect();
        const query = {
            name: 'fetch-news-by-page',
            text: 'SELECT id, title, text, date_posted FROM news ORDER BY date_posted DESC LIMIT 10',
            values: [],
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

