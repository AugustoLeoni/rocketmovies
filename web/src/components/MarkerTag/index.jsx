import { useEffect, useState } from 'react';
import { FiX, FiPlus } from 'react-icons/fi'
import { Container } from "./styled";

export function MarkerTag({ value, isNew, onclick, ...rest }) {
  const [valueLenght, setValueLenght] = useState(11)

  function sizeLenght() {
    if (value) {
      setValueLenght(value.length)
    }
  }

  useEffect(() => {
    sizeLenght()
  }, [])

  return (
    <Container
      isNew={isNew}
    >
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        size={valueLenght}
        {...rest}
      />
      <button
        type='button'
        onClick={onclick}
      >
        {isNew ? <FiPlus size={20} /> : <FiX size={20} />}
      </button>

    </Container>
  )
}