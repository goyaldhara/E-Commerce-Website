import styled from "styled-components"
import { shirtProducts } from "../data";
import ShirtProduct from "./ShirtProduct"

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const ShirtProducts = () => {
    return (
            <Container>
                {shirtProducts.map(item=>(
                    <ShirtProduct item={item} key={item.id} />
                ))}
            </Container>
    );
};

export default ShirtProducts