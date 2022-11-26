import styled from "styled-components"
import { loungeProducts } from "../data";
import LoungeProduct from "./LoungeProduct";


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const LoungeProducts = () => {
    return (
            <Container>
                {loungeProducts.map(item=>(
                    <LoungeProduct item={item} key={item.id} />
                ))}
            </Container>
    );
};

export default LoungeProducts