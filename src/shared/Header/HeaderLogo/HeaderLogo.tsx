import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderLogo() {
    return (
        <Link to="/" className="HeaderLogo" data-testid="HeaderLogo">
            <label className="firstName">Anders</label>
            <label className="lastName">Lundback</label>
        </Link>
    );
}
