import React from 'react'
import { Menu, Image, Header } from 'semantic-ui-react'
import style from './Header.module.scss';
import logo from '../../img/logo.png'

export function MenuHeader() {

    const Title = () => {
        return <Header content="AliceNet Documenation Hub" />
    }

    return (
        <div>
            <Menu secondary className={style.menu}>
                <Menu.Item
                    content={<Image size="mini" src={logo} />}
                />
                <Menu.Item
                    content={<Title />}
                />
            </Menu>
        </div>
    )
}