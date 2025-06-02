interface MediaItem {
  title: string;
  subtitle?: string;
  description?: string;
  multimediaSrc: string;
  type: string;
  badge?: string;
  tags?: string[];
  progress?: number;
}

export default MediaItem;
