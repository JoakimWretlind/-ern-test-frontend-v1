import { useEffect, useState } from 'react';
import { Section } from "../styling";

const Tweets = () => {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        try {
            const data = await fetch('/tweets');
            const items = await data.json();
            setItems(items)
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <Section id="tweets">
            {items.map((item, index) => {
                return (
                    <div key={index}>
                        <p>Name: {item.name}</p>
                        <p>Message: {item.msg}</p>
                        <p>UserName: {item.username}</p>
                    </div>
                )
            })}
        </Section>
    )
}

export default Tweets
