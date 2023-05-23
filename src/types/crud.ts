export type FormProps<T> = {
    onClose: () => void
    onSubmit: (data: T) => void
}