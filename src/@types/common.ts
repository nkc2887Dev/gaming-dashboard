export interface MasterModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath?: string;
  queryParam?: string;
  onPageChange?: (page: number) => void;
}
