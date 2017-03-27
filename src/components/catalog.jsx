import React from 'react';
//import '../sass/components/catalog';

export default class Catalog extends React.Component {
    render() {
        return (
            <div className="catalog">
                <div className="catalog-header">
                    <div className="row">
                        <div className="col-8-sm">
                            <h1>BOLSAS E ACESSÓRIOS FEMININOS</h1>
                        </div>
                        <div className="col-4-sm right">
                            2.875 itens
                        </div>
                    </div>
                </div>
                <div className="catalog-actions">
                    <div className="row">
                        <div className="col-6-sm">
                            <button className="dft button fluid">Filtrar</button>
                        </div>
                        <div className="col-6-sm">
                            <select className="dropdown fluid">
                                <option val="Mais Populares">Mais Populares</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}