
    const luasPage = document.getElementById('luasPage');
    const kelilingPage = document.getElementById('kelilingPage');
    const btnLuas = document.getElementById('btnLuas');
    const btnKel = document.getElementById('btnKel');

    btnLuas.addEventListener('click', function() {
      luasPage.style.display = 'block';
      kelilingPage.style.display = 'none';
    });

    btnKel.addEventListener('click', function() {
      kelilingPage.style.display = 'block';
      luasPage.style.display = 'none';
    });
  ;

  const alas = document.getElementById('alas')
  const tinggi = document.getElementById('tinggi')
  const buttonLuas = document.getElementById('buttonLuas')
  const output = document.getElementById('output')
  buttonLuas.addEventListener('click', function(){
    let a = alas.value
    let t = tinggi.value
    let luas = 0.5*a*t
    output.innerHTML = `L = 1/2 x a x t<br><br> L = 1/2 x ${a} x ${t} <br><br> L = ${luas}`
  })

  const s1 = document.getElementById('s1')
  const s2 = document.getElementById('s2')
  const s3 = document.getElementById('s3')
  const buttonKeliling = document.getElementById('buttonKeliling')
  const outputkel = document.getElementById('outputkel')
  buttonKeliling.addEventListener('click', function(){
    let sisi1 = parseInt(s1.value)
    let sisi2 = parseInt(s2.value)
    let sisi3 = parseInt(s3.value)
    let keliling = sisi1 + sisi2 + sisi3 
    outputkel.innerHTML = `K = S1 + S2 + S3<br><br> K = ${sisi1} + ${sisi2} + ${sisi3} <br><br> L = ${keliling}`
  })

  function resetLuas () {
    const alas = document.getElementById('alas')
  const tinggi = document.getElementById('tinggi')
  const buttonLuas = document.getElementById('buttonLuas')
  const output = document.getElementById('output')
  alas.value = null;
  tinggi.value = null;
  output.innerHTML = '';
  }

  function resetKeliling () {
    const s1 = document.getElementById('s1')
  const s2 = document.getElementById('s2')
  const s3 = document.getElementById('s3')
  const buttonKeliling = document.getElementById('buttonKeliling')
  const outputkel = document.getElementById('outputkel')
  s1.value = null;
  s2.value = null;
  s3.value = null;
  outputkel.innerHTML= '';
  }