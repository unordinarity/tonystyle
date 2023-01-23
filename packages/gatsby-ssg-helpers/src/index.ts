import { useEffect, useState } from 'react'

const runnableFunctions: Array<Function> = []

export const executeAfterRender = (func: Function) => {
  runnableFunctions.push(func)
}

export const afterRenderTrigger = () => {
  if (typeof window === 'object') {
    runnableFunctions.forEach(func => func())
  }
}

export const useRenderingState = (): 'server' | 'first-client-render' | 'subsequent-client-render' => {
  const [isFirstRender, setFirstRender] = useState<boolean>(true)
  useEffect(() => {
    setFirstRender(false)
  }, [])

  return typeof window === 'object'
    ? isFirstRender
      ? 'first-client-render'
      : 'subsequent-client-render'
    : 'server'
}
