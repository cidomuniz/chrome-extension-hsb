interface Stream {
    id: number,
    user_id: number, 
    user_name: string, 
    game_id: number,
    type: string,
    title: string,
    viewer_count: number,
    started_at: Date,
    language: string,
    thumbnail_url: string,
    tag_ids: string[]
}