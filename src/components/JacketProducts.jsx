import styled from "styled-components"
import { jacketProducts } from "../data";
import JacketProduct from "./JacketProduct"

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const JacketProducts = () => {
    return (
            <Container>
                {jacketProducts.map(item=>(
                    <JacketProduct item={item} key={item.id} />
                ))}
            </Container>
    );
};

export default JacketProducts