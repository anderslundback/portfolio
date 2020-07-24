import React from 'react';
import Code from '../shared/Code/Code';
import Footer from '../shared/Footer/Footer';

export default function Home() {

    const getCode = () => (`describe('devDetails function', () => {

    it('fetches some details about R. Mallols,', () => {

        //given
        const devDetails = { id: 'rmallols' };

        //when
        const { 
            loves, learning, favAnimal 
        } = getDevDetails(devDetails);

        //then
        expect(loves).to.equal('ReactJs');
        expect(learning).to.deep.equal(['Deno', 'Vue3']);
        expect(favAnimal).to.equal('Sharktopus');
    });
});`)
    return (
        <div className="Home">
            <main>
                <div className="welcome is-text-right">
                    <h1 className="title animate__animated animate__bounceInDown">
                        Hi!
                    </h1>
                    <h5 className="animate__animated animate__bounceInUp">
                        I'm a <label className="is-color-red">passionate</label><br />
                    full-stack <label className="is-color-yellow">JavaScript</label> dev<br />
                    based in <label className="is-color-green">London</label>.
                </h5>
                </div>
                <div className="codeWrapper">
                    <Code code={getCode()} />
                </div>
            </main>
            <Footer text="Find out more" path="about-me" />
        </div>
    );
}