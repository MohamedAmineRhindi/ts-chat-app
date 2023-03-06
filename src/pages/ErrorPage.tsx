import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  // TODO: Add error type depending of what error is thrown
  const error: any = useRouteError()
  console.error(error)
  // TODO: Add error page
  return <i>{error.statusText || error.message}</i>
}
