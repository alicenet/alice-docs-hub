import React from 'react'
import { Header, Table, Grid, Icon } from 'semantic-ui-react';
import style from './DocList.module.scss';
import docConfig from '../../docConfig.json';

export function DocList() {

    const TableHeader = () => {
        return (
            <Table.Header >
                <Table.Row>
                    <Table.Cell><strong>Product</strong></Table.Cell>
                    <Table.Cell textAlign="center"><strong>Docs</strong></Table.Cell>
                    <Table.Cell textAlign="center"><strong>Github</strong></Table.Cell>
                </Table.Row>
            </Table.Header>
        )
    }

    const DocRows = ({ configKey }) => {
        let sites = docConfig[configKey];
        console.log(sites)
        let rows = [];
        sites = sites.sort((a, b) => a.name < b.name ? -1 : 1);
        docConfig[configKey].forEach(site => {
            rows.push(
                <Table.Row>
                    <Table.Cell width="12">{site.name}</Table.Cell>
                    <Table.Cell textAlign="center" width="2" className={[style.cell, style.hoverable].join(" ")}>
                        <a href={site.url} className={style.cellLink} target="_blank" rel="noopener noreferrer">
                            <span style={{ marginLeft: "1rem" }}>
                                <Icon name="external alternate" />
                            </span>
                        </a>
                    </Table.Cell>
                    <Table.Cell width="2" textAlign="center" className={[style.cell, site.github !== "N/A" ? style.hoverable : ""].join(" ")}>
                        {site.github === "N/A" ? "N/A" : (<a className={style.cellLink} href={site.github} target="_blank" rel="noopener noreferrer">
                            <span style={{ marginLeft: "1rem" }}>
                                <Icon name="github" />
                            </span>
                        </a>)}
                    </Table.Cell>
                </Table.Row>
            )
        });
        return rows;
    }

    return (
        <Grid>
            <Grid.Column width={16}>
                <Header content="User Documentation" subheader="Documentation aimed for users using our applications" />
                <Table celled >
                    <TableHeader />
                    <DocRows configKey="user" />
                </Table>
            </Grid.Column>
            <Grid.Column width={16}>
                <Header content="Developer Documentation" subheader="Documentation for community developers or those building off our APIs" />
                <Table celled >
                    <TableHeader />
                    <DocRows configKey="technical" />
                </Table>
            </Grid.Column>
        </Grid>
    )
}