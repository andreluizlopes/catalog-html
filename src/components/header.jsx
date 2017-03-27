import React from 'react';
import '../sass/components/component-test';

export default class Header extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4-sm">Menu</div>
                    <div className="col-4-sm center">Logo</div>
                    <div className="col-2-sm right">Favoritos</div>
                    <div className="col-2-sm right">Sacola</div>
                </div>
                <div className="row">
                    <div className="col-12-sm">
                        <input placeholder="Busca" />
                    </div>
                </div>
            </div>
        );
    }
}