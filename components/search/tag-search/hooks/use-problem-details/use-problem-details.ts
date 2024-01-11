import {useCallback} from "react";

const useProblemDetails = () => {

  const isProblemDetail = useCallback((error: any) => {
    return error && typeof error === 'object' && 'type' in error && 'detail' in error && 'status' in error && 'title' in error
  }, [])

  return {
    isProblemDetail
  }
}

export default useProblemDetails;