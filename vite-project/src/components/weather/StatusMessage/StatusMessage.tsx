import "../../../styles/StatusMessage.css"

type StatusMessageProps = {
  message: string
}

export default function StatusMessage({ message }: StatusMessageProps) {
  return <p className="status-message">{message}</p>
}
