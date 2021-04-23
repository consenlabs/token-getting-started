export const isCancel = (error: Error) => {
  if (error.message.includes('user_canceled')) return true
  if ((error as any)?.errorCode === 1001) return true
  return false
}

export const showError = (error: Error) => {
  if (isCancel(error)) return alert('You canceled the operation.')
  alert(error.message)
}
