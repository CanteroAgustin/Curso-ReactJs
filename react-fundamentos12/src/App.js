import React, { Component } from 'react';


class App extends Component {

    state = {
        products: [
            {
                "id": 1,
                "name": "camisa unicornio",
                "colors": ["#467367", "#05fd88", "#a706ee"],
                "price": 20
            },
            {
                "id": 2,
                "name": 'jeans',
                "colors": ["#D35EFF", "#9956E8", "#876BFF", "#5662E8"],
                "price": 32
            },
            {
                "id": 3,
                "name": "taza",
                "colors": ["#804342", "#FFD2D1", "#FF8785", "#806969"],
                "price": 20
            },
            {
                "id": 4,
                "name": "camisa icream",
                "colors": ["#2544B3", "#FF8A69", "#5076FF", '#7FCC2B'],
                "price": 20
            },
            {
                "id": 5,
                "name": "camisa dragon",
                "colors": ["#B32542", "#FF6987", "#FF4F73", "#14B32E"],
                "price": 20
            },
        ]
    }


    render() {
        return (
            <div>
                <h3>Ninja PRO</h3>
                <div>
                    {this.state.products.map((product) => (
                        <div>
                            $ {product.price} - {product.name}
                            <div>
                                {product.colors.map((color) => (
                                    <span
                                        style={{
                                            width: '13px',
                                            height: '13px',
                                            borderRadius: '0.1em',
                                            border: 'solid 1px gray',
                                            display: 'inline-block',
                                            margin: '0.1',
                                            background: color
                                        }}
                                    ></span>
                                ))}
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        )
    }
}




export default App