function Setup() {
  return (
    <div id="setup">
      <h2 className="text-info">Persiapan</h2>
      <details className="my-3">
        <summary className="text-primary">Instal</summary>
        <p>Instal Truffle dan Ganache secara global.</p>
        <code>$ npm install -g truffle ganache</code>
      </details>
      <details className="my-3">
        <summary className="text-primary">Ganache dan MetaMask</summary>
        <p>
          Buka terminal dan jalankan Ganache, blockchain Ethereum yang disimulasikan di mesin Anda.
        </p>
        <code>$ ganache</code>
        <p>Impor kunci pribadi pertama ke MetaMask dari daftar kunci yang dihasilkan.</p>
      </details>
      <details className="my-3">
        <summary className="text-primary">Truffle</summary>
        <p>
          Biarkan Ganache berjalan dan buka terminal lain. Mari kita kompilasi dan terapkan kontrak kita
          ke Ganache.
        </p>
        <code>
          {`$ cd truffle\n`}
          {`$ truffle migrate --network development\n`}
          <span className="dim-color">
            # Jaringan `development` mengarah ke Ganache, dikonfigurasi di
            truffle/truffle-config.js pada baris 45.
          </span>
        </code>
      </details>
    </div>
  );
}

export default Setup;
