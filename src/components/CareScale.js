import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'


function CareScale({ scaleValue, careType, name }) {
  const range = [1, 2, 3];

  const scaleType = careType === "light" ? (
    <img src={Sun} alt='sun-icon' />
  ) : (
    <img src={Water} alt='water-icon' />
  )


  function alerteEntretien( {scaleValue, careType, name} ) {

    const quantité = `${scaleValue === 1 ? "peu" : ''} ${scaleValue === 2 ? "modérement" : ''} ${scaleValue === 3 ? "beaucoup" : ''} `
    const type = `${careType === "light" ? "de lumière" : "d'arrosage"}`


        const message = `${name} a besoin de ${quantité} ${type} !` 

        alert(message)
  }
 

  return (
    <div>
      {range.map((rangeElement) =>
        scaleValue >= rangeElement ? (
          <span key={rangeElement.toString()} onClick={() => alerteEntretien({ scaleValue, careType, name })}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;
