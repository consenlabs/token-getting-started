import '@geist-ui/style'
import './style.css'
import { ethers } from 'ethers'

const app = document.querySelector<HTMLDivElement>('#app')!

const main = async () => {
  await (window as any).ethereum.enable()
  const provider = new ethers.providers.Web3Provider((window as any).ethereum)
  const signer = provider.getSigner()
  const address = await signer.getAddress()
  document.querySelector('#address')!.innerHTML = `Adderss: ${address}`

  const signHandler = async () => {
    try {
      const result = await signer.signMessage('hello imToken!')
      document.querySelector('#result')!.innerHTML = `
      Signature Result: ${result}
    `.trim()
    } catch (err) {
      alert(err.message)
    }
  }
  const el = document.querySelector('#toSign')!
  el.removeAttribute('onclick')
  el!.addEventListener('click', signHandler)
}

app.innerHTML = `
  <section>
    <h3>Hello imToken</h3>
    <p>1. Click connect wallet to start using the DApp.</p>
    <pre class="zi-dark" id="address">Adderss: Unconnected</pre>
    <br>
    <p>2. Signing of the following strings:</p>
    <pre class="zi-dark" id="result">Signature Result: </pre>
    <button class="zi-btn primary small auto" id="toSign" onclick="alert('Unconnected')">Connect to Wallet</button>
  </section>
`
main().catch(err => console.log(err))
