import { useState } from "react";
import Button from "@mui/material/Button";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    // <div style={{ textAlign: "center", justifyContent: "center" }}>
    //   <h2>{contador}</h2>
    //   <Button style={{ padding: "15px" }} onClick={sumar} variant="contained">
    //     sumar
    //   </Button>
    //   <Button style={{ padding: "15px" }} onClick={restar} variant="contained">
    //     restar
    //   </Button>
    //   <Button
    //     style={{ padding: "20px" }}
    //     onClick={() => onAdd(contador)}
    //     variant="contained"
    //   >
    //     Agregar al carrito
    //   </Button>
    // </div>
    <div>
      <h2 style={{marginBottom:"10px"}}>Cantidad: {contador}</h2>

<Button style={{margin:"0px 5px"}} variant="contained" onClick={sumar}>
  Sumar
</Button>
<Button style={{margin:"0px 5px"}} variant="contained" onClick={restar}>
  Restar
</Button>
<Button style={{margin:"0px 5px"}} variant="contained" onClick={() => onAdd(contador)}>
  Agregar al carrito
</Button>
    </div>
  );
};

export default ItemCount;
