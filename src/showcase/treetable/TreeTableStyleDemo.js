import React, { Component } from 'react';
import { TreeTable } from '../../components/treetable/TreeTable';
import { Column } from "../../components/column/Column";
import { NodeService } from '../service/NodeService';
import { TreeTableSubmenu } from '../../showcase/treetable/TreeTableSubmenu';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class TreeTableStyleDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: []
        };
        this.nodeservice = new NodeService();
        this.sizeTemplate = this.sizeTemplate.bind(this);
        this.rowClassName = this.rowClassName.bind(this);
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes: data}));
    }

    sizeTemplate(node) {
        let size = node.data.size;
        let fontWeight = parseInt(size, 10) > 75 ? 'bold' : 'normal';

        return <span style={{fontWeight: fontWeight}}>{size}</span>;
    }

    rowClassName(node) {
        return {'p-highlight' : (node.children && node.children.length === 3)};
    }

    render() {
        return (
            <div>
                <TreeTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TreeTable - Styling</h1>
                        <p>Particular rows and cells can be styled based on data.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("treeTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <p>This treetable highlights cells with a bolder font weight whose size value is greater than 75kb and highlights rows who has at 3 child rows.</p>
                    <TreeTable value={this.state.nodes} rowClassName={this.rowClassName}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size" body={this.sizeTemplate}></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                </div>

                <TreeTableStyleDemoDoc />
            </div>
        )
    }
}

class TreeTableStyleDemoDoc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };

        this.sources = {
            'app': {
                tabName: 'Source',
                content: `
import React, { Component } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from "primereact/column";
import { NodeService } from '../service/NodeService';

export class TreeTableStyleDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: []
        };
        this.nodeservice = new NodeService();
        this.sizeTemplate = this.sizeTemplate.bind(this);
        this.rowClassName = this.rowClassName.bind(this);
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes: data}));
    }

    sizeTemplate(node) {
        let size = node.data.size;
        let fontWeight = parseInt(size, 10) > 75 ? 'bold' : 'normal';

        return <span style={{fontWeight: fontWeight}}>{size}</span>;
    }

    rowClassName(node) {
        return {'p-highlight' : (node.children && node.children.length === 3)};
    }

    render() {
        return (
            <div>
                <p>This treetable highlights cells with a bolder font weight whose size value is greater than 75kb and highlights rows who has at 3 child rows.</p>
                <TreeTable value={this.state.nodes} rowClassName={this.rowClassName}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size" body={this.sizeTemplate}></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>
        )
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from "primereact/column";
import { NodeService } from '../service/NodeService';

const TreeTableStyleDemo = () => {
    const [nodes, setNodes] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const sizeTemplate = (node) => {
        let size = node.data.size;
        let fontWeight = parseInt(size, 10) > 75 ? 'bold' : 'normal';

        return <span style={{fontWeight: fontWeight}}>{size}</span>;
    };

    const rowClassName = (node) => {
        return {'p-highlight' : (node.children && node.children.length === 3)};
    };

    return (
        <div>
            <p>This treetable highlights cells with a bolder font weight whose size value is greater than 75kb and highlights rows who has at 3 child rows.</p>
            <TreeTable value={nodes} rowClassName={rowClassName}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size" body={sizeTemplate}></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from "primereact/column";
import { NodeService } from '../service/NodeService';

const TreeTableStyleDemo = () => {
    const [nodes, setNodes] = useState<any>([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const sizeTemplate = (node: any) => {
        let size = node.data.size;
        let fontWeight: any = parseInt(size, 10) > 75 ? 'bold' : 'normal';

        return <span style={{fontWeight: fontWeight}}>{size}</span>;
    };

    const rowClassName = (node: any) => {
        return {'p-highlight' : (node.children && node.children.length === 3)};
    };

    return (
        <div>
            <p>This treetable highlights cells with a bolder font weight whose size value is greater than 75kb and highlights rows who has at 3 child rows.</p>
            <TreeTable value={nodes} rowClassName={rowClassName}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size" body={sizeTemplate}></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    )
}
                `
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.activeIndex !== nextState.activeIndex) {
            return true;
        }

        return false;
    }

    renderSourceButtons() {
        return (
            <div className="source-button-group">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/treetable" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="TreeTableStyleDemo" sources={this.sources} service="NodeService" data="treetablenodes" activeButtonIndex={this.state.activeIndex} />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

        return (
            <div className="content-section documentation">
                <TabView activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })}>
                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName}>
                                    {sourceButtons}

                                    <CodeHighlight className="language-javascript">
                                        {value.content}
                                    </CodeHighlight>
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }
}
