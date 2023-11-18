export interface Review {
    id?: number | string; // ID của đánh giá (có thể là số nguyên hoặc chuỗi)
    productId: number;
    userId: number; // ID người dùng đăng đánh giá
    rating: number; // Điểm đánh giá (số nguyên hoặc số thực)
    comment: string; // Nội dung đánh giá
    createdAt: Date; // Thời gian tạo đánh giá
}