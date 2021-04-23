import '@geist-ui/style'
import './style.css'
import { ethers } from 'ethers'
import { showError } from './utils'

const app = document.querySelector<HTMLDivElement>('#app')!
const provider = new ethers.providers.Web3Provider((window as any).ethereum)
const signer = provider.getSigner()

const main = async () => {
  try {
    const address = await signer.getAddress()
    document.querySelector('#address')!.innerHTML = `Adderss: ${address}`
  } catch (err) {
    showError(err)
  }
}

const signHandler = async () => {
  const [address] = await provider.listAccounts()
  if (!address) return alert('Unconnected')

  try {
    const result = await signer.signMessage('hello imToken!')
    document.querySelector('#result')!.innerHTML = `
      Signature Result: ${result}
    `.trim()
  } catch (err) {
    showError(err)
  }
}

app.innerHTML = `
  <section>
    <h3>Hello imToken</h3>
    <p>1. Click connect wallet to start using the DApp.</p>
    <pre class="zi-dark" id="address">Adderss: Unconnected</pre>
    <br>
    <p>2. Signing of the following strings:</p>
    <pre class="zi-dark" id="result">Signature Result: </pre>
    <button class="zi-btn primary small auto" id="toSign">Connect to Wallet</button>
  </section>
`
main().catch(err => console.log(err))
document.querySelector('#toSign')!.addEventListener('click', signHandler)
