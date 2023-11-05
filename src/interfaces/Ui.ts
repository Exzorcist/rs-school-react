export interface LoaderProps {
  isLoading: boolean;
}

export interface PaginationProps {
  page: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  currentLimit: number;
  isPagerShow: boolean;
  setCurrentLimit: (data: number) => void;
}

export interface SelectProps {
  currentLimit: number;
  setCurrentLimit: (data: number) => void;
}
