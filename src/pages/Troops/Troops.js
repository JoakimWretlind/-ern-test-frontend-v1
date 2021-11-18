import { useEffect, useState } from 'react';
import { Section } from '../styling';
import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 3rem;
    height: 100%;
    width: 100%;
    max-width: 126rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
    gap: 2rem;
`;

const Card = styled.div`
    position: relative;
    background: #f1f1f1;
    height: 30vh;
    min-height: 18rem;
    width: 18rem;
    border-radius: .5rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 2rem 0 1rem;
    box-shadow: 0 0 1rem rgba(161,216,232,.2);
    @media screen and (min-height: 541px){
        height: 15vh;
        margin: .5rem 1rem;
    }
`;

const Troops = () => {

    useEffect(() => {
        fetchItems();
    }, [])

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        try {
            const data = await fetch('/troops');
            const items = await data.json();
            setItems(items)
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <Section id="troops">
            <h2 style={{ fontSize: "4rem" }}>Troops</h2>
            <Container>
                {items.map((item, index) => {
                    return (
                        <Card key={index}>
                            <h4>Name</h4>
                            <h2 style={{ color: "darkblue" }}>{item.title}</h2>
                        </Card>
                    )
                })}
            </Container>
        </Section>
    )
}

export default Troops
