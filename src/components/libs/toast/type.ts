export type ToastProps = {
    message?: string;
    open?: boolean;
    status?: 'success' | 'info' | 'warning' | 'error';
    onClose?: () => void;
}