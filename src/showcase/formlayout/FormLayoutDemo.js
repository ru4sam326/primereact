import React, {Component} from 'react';
import {InputText} from '../../components/inputtext/InputText';
import {Button} from '../../components/button/Button';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';
import {Checkbox} from "../../components/checkbox/Checkbox";
import {RadioButton} from "../../components/radiobutton/RadioButton";
import {Dropdown} from "../../components/dropdown/Dropdown";
import {InputTextarea} from "../../components/inputtextarea/InputTextarea";

export class FormLayoutDemo extends Component {

    constructor() {
        super();
        this.state = {
            cities1: [],
            cities2: [],
            selectedState: null
        };

        this.states= [
            {name: 'Arizona', code: 'Arizona'},
            {name: 'California', value: 'California'},
            {name: 'Florida', code: 'Florida'},
            {name: 'Ohio', code: 'Ohio'},
            {name: 'Washington', code: 'Washington'}
        ];
        this.onCityChange1 = this.onCityChange1.bind(this);
        this.onCityChange2 = this.onCityChange2.bind(this);
        this.onStateChange = this.onStateChange.bind(this);
    }

    onCityChange1(e) {
        let selectedCities = [...this.state.cities1];

        if(e.checked)
            selectedCities.push(e.value);
        else
            selectedCities.splice(selectedCities.indexOf(e.value), 1);

        this.setState({cities1: selectedCities});
    }

    onCityChange2(e) {
        let selectedCities = [...this.state.cities2];

        if(e.checked)
            selectedCities.push(e.value);
        else
            selectedCities.splice(selectedCities.indexOf(e.value), 1);

        this.setState({cities2: selectedCities});
    }

    onStateChange(e) {
        this.setState({selectedState: e.value});
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Form Layout</h1>
                        <p>Form layout is a CSS utility optimized for creating forms with ease. FormLayout is not included in PrimeReact as it is provided by <a href="https://github.com/primefaces/primeflex">PrimeFlex</a>,
                            a shared grid library between PrimeFaces, PrimeNG, PrimeReact and PrimeVue projects.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("formLayout")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation formlayout-demo">
                    <h3>Vertical</h3>
                    <div className="p-fluid">
                        <div className="p-field">
                            <label htmlFor="firstname1">Firstname</label>
                            <InputText id="firstname1" type="text"/>
                        </div>
                        <div className="p-field">
                            <label htmlFor="lastname1">Lastname</label>
                            <InputText id="lastname1" type="text"/>
                        </div>
                    </div>

                    <h3>Vertical and Grid</h3>
                    <div className="p-fluid p-formgrid p-grid">
                        <div className="p-field p-col">
                            <label htmlFor="firstname2">Firstname</label>
                            <InputText id="firstname2" type="text"/>
                        </div>
                        <div className="p-field p-col">
                            <label htmlFor="lastname2">Lastname</label>
                            <InputText id="lastname2" type="text"/>
                        </div>
                    </div>

                    <h3>Horizontal and Fixed Width</h3>
                    <div className="p-field p-grid">
                        <label htmlFor="firstname3" className="p-col-fixed" style={{width:'100px'}}>Firstname</label>
                        <div className="p-col">
                            <InputText id="firstname3" type="text"/>
                        </div>
                    </div>
                    <div className="p-field p-grid">
                        <label htmlFor="lastname3" className="p-col-fixed" style={{width:'100px'}}>Lastname</label>
                        <div className="p-col">
                            <InputText id="lastname3" type="text"/>
                        </div>
                    </div>

                    <h3>Horizontal and Fluid</h3>
                    <div className="p-fluid">
                        <div className="p-field p-grid">
                            <label htmlFor="firstname4" className="p-col-12 p-md-2">Firstname</label>
                            <div className="p-col-12 p-md-10">
                                <InputText id="firstname4" type="text"/>
                            </div>
                        </div>
                        <div className="p-field p-grid">
                            <label htmlFor="lastname4" className="p-col-12 p-md-2">Lastname</label>
                            <div className="p-col-12 p-md-10">
                                <InputText id="lastname4" type="text"/>
                            </div>
                        </div>
                    </div>

                    <h3>Inline</h3>
                    <div className="p-formgroup-inline">
                        <div className="p-field">
                            <label htmlFor="firstname5" className="p-sr-only">Firstname</label>
                            <InputText id="firstname5" type="text" placeholder="Firstname"/>
                        </div>
                        <div className="p-field">
                            <label htmlFor="lastname5" className="p-sr-only">Lastname</label>
                            <InputText id="lastname5" type="text" placeholder="Lastname"/>
                        </div>
                        <Button type="button" label="Submit"/>
                    </div>

                    <h3>Vertical Checkbox</h3>
                    <div className="p-field-checkbox">
                        <Checkbox inputId="city1" value="Chicago" onChange={this.onCityChange1} checked={this.state.cities1.indexOf('Chicago') !== -1}/>
                        <label htmlFor="city1">Chicago</label>
                    </div>
                    <div className="p-field-checkbox">
                        <Checkbox inputId="city2" value="Los Angeles" onChange={this.onCityChange1} checked={this.state.cities1.indexOf('Los Angeles') !== -1}/>
                        <label htmlFor="city2">Los Angeles</label>
                    </div>

                    <h3>Horizontal Checkbox</h3>
                    <div className="p-formgroup-inline">
                        <div className="p-field-checkbox">
                            <Checkbox inputId="city3" value="Chicago" onChange={this.onCityChange2} checked={this.state.cities2.indexOf('Chicago') !== -1}/>
                            <label htmlFor="city3">Chicago</label>
                        </div>
                        <div className="p-field-checkbox">
                            <Checkbox inputId="city4" value="Los Angeles" onChange={this.onCityChange2} checked={this.state.cities2.indexOf('Los Angeles') !== -1}/>
                            <label htmlFor="city4">Los Angeles</label>
                        </div>
                    </div>

                    <h3>Vertical RadioButton</h3>
                    <div className="p-field-radiobutton">
                        <RadioButton inputId="city5" name="city1" value="Chicago" onChange={(e) => this.setState({city1: e.value})} checked={this.state.city1 === 'Chicago'} />
                        <label htmlFor="city5">Chicago</label>
                    </div>
                    <div className="p-field-radiobutton">
                        <RadioButton inputId="city6" name="city1" value="Los Angeles" onChange={(e) => this.setState({city1: e.value})} checked={this.state.city1 === 'Los Angeles'} />
                        <label htmlFor="city6">Los Angeles</label>
                    </div>

                    <h3>Horizontal RadioButton</h3>
                    <div className="p-formgroup-inline">
                        <div className="p-field-checkbox">
                            <RadioButton inputId="city5" name="city2" value="Chicago" onChange={(e) => this.setState({city2: e.value})} checked={this.state.city2 === 'Chicago'} />
                            <label htmlFor="city7">Chicago</label>
                        </div>
                        <div className="p-field-checkbox">
                            <RadioButton inputId="city8" name="city2" value="Los Angeles" onChange={(e) => this.setState({city2: e.value})} checked={this.state.city2 === 'Los Angeles'} />
                            <label htmlFor="city8">Los Angeles</label>
                        </div>
                    </div>

                    <h3>Help Text</h3>
                    <div className="p-field p-fluid">
                        <label htmlFor="username">Username</label>
                        <InputText id="username" type="username" aria-describedby="username-help"/>
                        <small id="username-help">Enter your username to reset your password.</small>
                    </div>

                    <h3>Advanced</h3>
                    <div className="p-fluid p-formgrid p-grid">
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="firstname6">Firstname</label>
                            <InputText id="firstname6" type="text" />
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="lastname6">Lastname</label>
                            <InputText id="lastname6" type="text" />
                        </div>
                        <div className="p-field p-col-12">
                            <label htmlFor="address">Address</label>
                            <InputTextarea id="address" type="text" rows="4" />
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="city">City</label>
                            <InputText id="city" type="text" />
                        </div>
                        <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="state">State</label>
                            <Dropdown inputId="state" value={this.state.selectedState} options={this.states} onChange={this.onStateChange} placeholder="Select" optionLabel="name"/>
                        </div>
                        <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="zip">Zip</label>
                            <InputText id="zip" type="text" />
                        </div>
                    </div>
                </div>

                <FormLayoutDoc />
            </div>
        )
    }
}

class FormLayoutDoc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };

        this.sources = {
            'app': {
                tabName: 'Source',
                content: `
import React, {Component} from 'react';
import {InputText} from 'primereact/inputtext';
import {Button} from "primereact/button";
import {Checkbox} from "primereact/checkbox";
import {RadioButton} from "primereact/radiobutton";
import {Dropdown} from "primereact/dropdown";
import {InputTextarea} from "primereact/inputtextarea";

export class FormLayoutDemo extends Component {

    constructor() {
        super();
        this.state = {
            cities1: [],
            cities2: [],
            selectedState: null
        };

        this.states = [
            {name: 'Arizona', code: 'Arizona'},
            {name: 'California', value: 'California'},
            {name: 'Florida', code: 'Florida'},
            {name: 'Ohio', code: 'Ohio'},
            {name: 'Washington', code: 'Washington'}
        ];
        this.onCityChange1 = this.onCityChange1.bind(this);
        this.onCityChange2 = this.onCityChange2.bind(this);
        this.onStateChange = this.onStateChange.bind(this);
    }

    onCityChange1(e) {
        let selectedCities = [...this.state.cities1];

        if(e.checked)
            selectedCities.push(e.value);
        else
            selectedCities.splice(selectedCities.indexOf(e.value), 1);

        this.setState({cities1: selectedCities});
    }

    onCityChange2(e) {
        let selectedCities = [...this.state.cities2];

        if(e.checked)
            selectedCities.push(e.value);
        else
            selectedCities.splice(selectedCities.indexOf(e.value), 1);

        this.setState({cities2: selectedCities});
    }

    onStateChange(e) {
        this.setState({selectedState: e.value});
    }

    render() {
        return (
            <div>
                <h3>Vertical</h3>
                <div className="p-fluid">
                    <div className="p-field">
                        <label htmlFor="firstname1">Firstname</label>
                        <InputText id="firstname1" type="text"/>
                    </div>
                    <div className="p-field">
                        <label htmlFor="lastname1">Lastname</label>
                        <InputText id="lastname1" type="text"/>
                    </div>
                </div>

                <h3>Vertical and Grid</h3>
                <div className="p-fluid p-formgrid p-grid">
                    <div className="p-field p-col">
                        <label htmlFor="firstname2">Firstname</label>
                        <InputText id="firstname2" type="text"/>
                    </div>
                    <div className="p-field p-col">
                        <label htmlFor="lastname2">Lastname</label>
                        <InputText id="lastname2" type="text"/>
                    </div>
                </div>

                <h3>Horizontal and Fixed Width</h3>
                <div className="p-field p-grid">
                    <label htmlFor="firstname3" className="p-col-fixed" style={{width:'100px'}}>Firstname</label>
                    <div className="p-col">
                        <InputText id="firstname3" type="text"/>
                    </div>
                </div>
                <div className="p-field p-grid">
                    <label htmlFor="lastname3" className="p-col-fixed" style={{width:'100px'}}>Lastname</label>
                    <div className="p-col">
                        <InputText id="lastname3" type="text"/>
                    </div>
                </div>

                <h3>Horizontal and Fluid</h3>
                <div className="p-fluid">
                    <div className="p-field p-grid">
                        <label htmlFor="firstname4" className="p-col-12 p-md-2">Firstname</label>
                        <div className="p-col-12 p-md-10">
                            <InputText id="firstname4" type="text"/>
                        </div>
                    </div>
                    <div className="p-field p-grid">
                        <label htmlFor="lastname4" className="p-col-12 p-md-2">Lastname</label>
                        <div className="p-col-12 p-md-10">
                            <InputText id="lastname4" type="text"/>
                        </div>
                    </div>
                </div>

                <h3>Inline</h3>
                <div className="p-formgroup-inline">
                    <div className="p-field">
                        <label htmlFor="firstname5" className="p-sr-only">Firstname</label>
                        <InputText id="firstname5" type="text" placeholder="Firstname"/>
                    </div>
                    <div className="p-field">
                        <label htmlFor="lastname5" className="p-sr-only">Lastname</label>
                        <InputText id="lastname5" type="text" placeholder="Lastname"/>
                    </div>
                    <Button type="button" label="Submit"/>
                </div>

                <h3>Vertical Checkbox</h3>
                <div className="p-field-checkbox">
                    <Checkbox inputId="city1" value="Chicago" onChange={this.onCityChange1} checked={this.state.cities1.indexOf('Chicago') !== -1}/>
                    <label htmlFor="city1">Chicago</label>
                </div>
                <div className="p-field-checkbox">
                    <Checkbox inputId="city2" value="Los Angeles" onChange={this.onCityChange1} checked={this.state.cities1.indexOf('Los Angeles') !== -1}/>
                    <label htmlFor="city2">Los Angeles</label>
                </div>

                <h3>Horizontal Checkbox</h3>
                <div className="p-formgroup-inline">
                    <div className="p-field-checkbox">
                        <Checkbox inputId="city3" value="Chicago" onChange={this.onCityChange2} checked={this.state.cities2.indexOf('Chicago') !== -1}/>
                        <label htmlFor="city3">Chicago</label>
                    </div>
                    <div className="p-field-checkbox">
                        <Checkbox inputId="city4" value="Los Angeles" onChange={this.onCityChange2} checked={this.state.cities2.indexOf('Los Angeles') !== -1}/>
                        <label htmlFor="city4">Los Angeles</label>
                    </div>
                </div>

                <h3>Vertical RadioButton</h3>
                <div className="p-field-radiobutton">
                    <RadioButton inputId="city5" name="city1" value="Chicago" onChange={(e) => this.setState({city1: e.value})} checked={this.state.city1 === 'Chicago'} />
                    <label htmlFor="city5">Chicago</label>
                </div>
                <div className="p-field-radiobutton">
                    <RadioButton inputId="city6" name="city1" value="Los Angeles" onChange={(e) => this.setState({city1: e.value})} checked={this.state.city1 === 'Los Angeles'} />
                    <label htmlFor="city6">Los Angeles</label>
                </div>

                <h3>Horizontal RadioButton</h3>
                <div className="p-formgroup-inline">
                    <div className="p-field-checkbox">
                        <RadioButton inputId="city5" name="city2" value="Chicago" onChange={(e) => this.setState({city2: e.value})} checked={this.state.city2 === 'Chicago'} />
                        <label htmlFor="city7">Chicago</label>
                    </div>
                    <div className="p-field-checkbox">
                        <RadioButton inputId="city8" name="city2" value="Los Angeles" onChange={(e) => this.setState({city2: e.value})} checked={this.state.city2 === 'Los Angeles'} />
                        <label htmlFor="city8">Los Angeles</label>
                    </div>
                </div>

                <h3>Help Text</h3>
                <div className="p-field p-fluid">
                    <label htmlFor="username">Username</label>
                    <InputText id="username" type="username" aria-describedby="username-help"/>
                    <small id="username-help">Enter your username to reset your password.</small>
                </div>

                <h3>Advanced</h3>
                <div className="p-fluid p-formgrid p-grid">
                    <div className="p-field p-col-12 p-md-6">
                        <label htmlFor="firstname6">Firstname</label>
                        <InputText id="firstname6" type="text" />
                    </div>
                    <div className="p-field p-col-12 p-md-6">
                        <label htmlFor="lastname6">Lastname</label>
                        <InputText id="lastname6" type="text" />
                    </div>
                    <div className="p-field p-col-12">
                        <label htmlFor="address">Address</label>
                        <InputTextarea id="address" type="text" rows="4" />
                    </div>
                    <div className="p-field p-col-12 p-md-6">
                        <label htmlFor="city">City</label>
                        <InputText id="city" type="text" />
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="state">State</label>
                        <Dropdown inputId="state" value={this.state.selectedState} options={this.state.states} onChange={this.onStateChange} placeholder="Select" optionLabel="name"/>
                    </div>
                    <div className="p-field p-col-12 p-md-3">
                        <label htmlFor="zip">Zip</label>
                        <InputText id="zip" type="text" />
                    </div>
                </div>
            </div>
        )
    }
}                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useState } from 'react';
import {InputText} from 'primereact/inputtext';
import {Button} from "primereact/button";
import {Checkbox} from "primereact/checkbox";
import {RadioButton} from "primereact/radiobutton";
import {Dropdown} from "primereact/dropdown";
import {InputTextarea} from "primereact/inputtextarea";

const FormLayoutDemo = () => {
    const [cities1, setCities1] = useState([]);
    const [cities2, setCities2] = useState([]);
    const [city1, setCity1] = useState(null);
    const [city2, setCity2] = useState(null);
    const [selectedState, setSelectedState] = useState(null);

    let states = [
            {name: 'Arizona', code: 'Arizona'},
            {name: 'California', value: 'California'},
            {name: 'Florida', code: 'Florida'},
            {name: 'Ohio', code: 'Ohio'},
            {name: 'Washington', code: 'Washington'}
    ];

    const onCityChange1 = (e) => {
        let selectedCities = [...cities1];

        if(e.checked)
            selectedCities.push(e.value);
        else
            selectedCities.splice(selectedCities.indexOf(e.value), 1);

        setCities1(selectedCities);
    }

    const onCityChange2 = (e) => {
        let selectedCities = [...cities2];

        if(e.checked)
            selectedCities.push(e.value);
        else
            selectedCities.splice(selectedCities.indexOf(e.value), 1);

        setCities2(selectedCities);
    }

    const onStateChange = (e) => {
        setSelectedState(e.value);
    }

    return (
        <div>
            <h3>Vertical</h3>
                    <div className="p-fluid">
                        <div className="p-field">
                            <label htmlFor="firstname1">Firstname</label>
                            <InputText id="firstname1" type="text"/>
                        </div>
                        <div className="p-field">
                            <label htmlFor="lastname1">Lastname</label>
                            <InputText id="lastname1" type="text"/>
                        </div>
                    </div>

                    <h3>Vertical and Grid</h3>
                    <div className="p-fluid p-formgrid p-grid">
                        <div className="p-field p-col">
                            <label htmlFor="firstname2">Firstname</label>
                            <InputText id="firstname2" type="text"/>
                        </div>
                        <div className="p-field p-col">
                            <label htmlFor="lastname2">Lastname</label>
                            <InputText id="lastname2" type="text"/>
                        </div>
                    </div>

                    <h3>Horizontal and Fixed Width</h3>
                    <div className="p-field p-grid">
                        <label htmlFor="firstname3" className="p-col-fixed" style={{width:'100px'}}>Firstname</label>
                        <div className="p-col">
                            <InputText id="firstname3" type="text"/>
                        </div>
                    </div>
                    <div className="p-field p-grid">
                        <label htmlFor="lastname3" className="p-col-fixed" style={{width:'100px'}}>Lastname</label>
                        <div className="p-col">
                            <InputText id="lastname3" type="text"/>
                        </div>
                    </div>

                    <h3>Horizontal and Fluid</h3>
                    <div className="p-fluid">
                        <div className="p-field p-grid">
                            <label htmlFor="firstname4" className="p-col-12 p-md-2">Firstname</label>
                            <div className="p-col-12 p-md-10">
                                <InputText id="firstname4" type="text"/>
                            </div>
                        </div>
                        <div className="p-field p-grid">
                            <label htmlFor="lastname4" className="p-col-12 p-md-2">Lastname</label>
                            <div className="p-col-12 p-md-10">
                                <InputText id="lastname4" type="text"/>
                            </div>
                        </div>
                    </div>

                    <h3>Inline</h3>
                    <div className="p-formgroup-inline">
                        <div className="p-field">
                            <label htmlFor="firstname5" className="p-sr-only">Firstname</label>
                            <InputText id="firstname5" type="text" placeholder="Firstname"/>
                        </div>
                        <div className="p-field">
                            <label htmlFor="lastname5" className="p-sr-only">Lastname</label>
                            <InputText id="lastname5" type="text" placeholder="Lastname"/>
                        </div>
                        <Button type="button" label="Submit"/>
                    </div>

                    <h3>Vertical Checkbox</h3>
                    <div className="p-field-checkbox">
                        <Checkbox inputId="city1" value="Chicago" onChange={onCityChange1} checked={cities1.indexOf('Chicago') !== -1}/>
                        <label htmlFor="city1">Chicago</label>
                    </div>
                    <div className="p-field-checkbox">
                        <Checkbox inputId="city2" value="Los Angeles" onChange={onCityChange1} checked={cities1.indexOf('Los Angeles') !== -1}/>
                        <label htmlFor="city2">Los Angeles</label>
                    </div>

                    <h3>Horizontal Checkbox</h3>
                    <div className="p-formgroup-inline">
                        <div className="p-field-checkbox">
                            <Checkbox inputId="city3" value="Chicago" onChange={onCityChange2} checked={cities2.indexOf('Chicago') !== -1}/>
                            <label htmlFor="city3">Chicago</label>
                        </div>
                        <div className="p-field-checkbox">
                            <Checkbox inputId="city4" value="Los Angeles" onChange={onCityChange2} checked={cities2.indexOf('Los Angeles') !== -1}/>
                            <label htmlFor="city4">Los Angeles</label>
                        </div>
                    </div>

                    <h3>Vertical RadioButton</h3>
                    <div className="p-field-radiobutton">
                        <RadioButton inputId="city5" name="city1" value="Chicago" onChange={e => setCity1(e.value)} checked={city1 === 'Chicago'} />
                        <label htmlFor="city5">Chicago</label>
                    </div>
                    <div className="p-field-radiobutton">
                        <RadioButton inputId="city6" name="city1" value="Los Angeles" onChange={e => setCity1(e.value)} checked={city1 === 'Los Angeles'} />
                        <label htmlFor="city6">Los Angeles</label>
                    </div>

                    <h3>Horizontal RadioButton</h3>
                    <div className="p-formgroup-inline">
                        <div className="p-field-checkbox">
                            <RadioButton inputId="city5" name="city2" value="Chicago" onChange={e => setCity2(e.value)} checked={city2 === 'Chicago'} />
                            <label htmlFor="city7">Chicago</label>
                        </div>
                        <div className="p-field-checkbox">
                            <RadioButton inputId="city8" name="city2" value="Los Angeles" onChange={e => setCity2(e.value)} checked={city2 === 'Los Angeles'} />
                            <label htmlFor="city8">Los Angeles</label>
                        </div>
                    </div>

                    <h3>Help Text</h3>
                    <div className="p-field p-fluid">
                        <label htmlFor="username">Username</label>
                        <InputText id="username" type="username" aria-describedby="username-help"/>
                        <small id="username-help">Enter your username to reset your password.</small>
                    </div>

                    <h3>Advanced</h3>
                    <div className="p-fluid p-formgrid p-grid">
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="firstname6">Firstname</label>
                            <InputText id="firstname6" type="text" />
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="lastname6">Lastname</label>
                            <InputText id="lastname6" type="text" />
                        </div>
                        <div className="p-field p-col-12">
                            <label htmlFor="address">Address</label>
                            <InputTextarea id="address" type="text" rows="4" />
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="city">City</label>
                            <InputText id="city" type="text" />
                        </div>
                        <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="state">State</label>
                            <Dropdown inputId="state" value={selectedState} options={states} onChange={onStateChange} placeholder="Select" optionLabel="name"/>
                        </div>
                        <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="zip">Zip</label>
                            <InputText id="zip" type="text" />
                        </div>
                    </div>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState } from 'react';
import {InputText} from 'primereact/inputtext';
import {Button} from "primereact/button";
import {Checkbox} from "primereact/checkbox";
import {RadioButton} from "primereact/radiobutton";
import {Dropdown} from "primereact/dropdown";
import {InputTextarea} from "primereact/inputtextarea";

const FormLayoutDemo = () => {
    const [cities1, setCities1] = useState([]);
    const [cities2, setCities2] = useState([]);
    const [city1, setCity1] = useState<string|undefined>(undefined);
    const [city2, setCity2] = useState<string|undefined>(undefined);
    const [selectedState, setSelectedState] = useState<any>(null);

    let states = [
            {name: 'Arizona', code: 'Arizona'},
            {name: 'California', value: 'California'},
            {name: 'Florida', code: 'Florida'},
            {name: 'Ohio', code: 'Ohio'},
            {name: 'Washington', code: 'Washington'}
    ];

    const onCityChange1 = (e) => {
        let selectedCities = [...cities1];

        if(e.checked)
            selectedCities.push(e.value);
        else
            selectedCities.splice(selectedCities.indexOf(e.value), 1);

        setCities1(selectedCities);
    }

    const onCityChange2 = (e) => {
        let selectedCities = [...cities2];

        if(e.checked)
            selectedCities.push(e.value);
        else
            selectedCities.splice(selectedCities.indexOf(e.value), 1);

        setCities2(selectedCities);
    }

    const onStateChange = (e) => {
        setSelectedState(e.value);
    }

    return (
        <div>
            <h3>Vertical</h3>
                    <div className="p-fluid">
                        <div className="p-field">
                            <label htmlFor="firstname1">Firstname</label>
                            <InputText id="firstname1" type="text"/>
                        </div>
                        <div className="p-field">
                            <label htmlFor="lastname1">Lastname</label>
                            <InputText id="lastname1" type="text"/>
                        </div>
                    </div>

                    <h3>Vertical and Grid</h3>
                    <div className="p-fluid p-formgrid p-grid">
                        <div className="p-field p-col">
                            <label htmlFor="firstname2">Firstname</label>
                            <InputText id="firstname2" type="text"/>
                        </div>
                        <div className="p-field p-col">
                            <label htmlFor="lastname2">Lastname</label>
                            <InputText id="lastname2" type="text"/>
                        </div>
                    </div>

                    <h3>Horizontal and Fixed Width</h3>
                    <div className="p-field p-grid">
                        <label htmlFor="firstname3" className="p-col-fixed" style={{width:'100px'}}>Firstname</label>
                        <div className="p-col">
                            <InputText id="firstname3" type="text"/>
                        </div>
                    </div>
                    <div className="p-field p-grid">
                        <label htmlFor="lastname3" className="p-col-fixed" style={{width:'100px'}}>Lastname</label>
                        <div className="p-col">
                            <InputText id="lastname3" type="text"/>
                        </div>
                    </div>

                    <h3>Horizontal and Fluid</h3>
                    <div className="p-fluid">
                        <div className="p-field p-grid">
                            <label htmlFor="firstname4" className="p-col-12 p-md-2">Firstname</label>
                            <div className="p-col-12 p-md-10">
                                <InputText id="firstname4" type="text"/>
                            </div>
                        </div>
                        <div className="p-field p-grid">
                            <label htmlFor="lastname4" className="p-col-12 p-md-2">Lastname</label>
                            <div className="p-col-12 p-md-10">
                                <InputText id="lastname4" type="text"/>
                            </div>
                        </div>
                    </div>

                    <h3>Inline</h3>
                    <div className="p-formgroup-inline">
                        <div className="p-field">
                            <label htmlFor="firstname5" className="p-sr-only">Firstname</label>
                            <InputText id="firstname5" type="text" placeholder="Firstname"/>
                        </div>
                        <div className="p-field">
                            <label htmlFor="lastname5" className="p-sr-only">Lastname</label>
                            <InputText id="lastname5" type="text" placeholder="Lastname"/>
                        </div>
                        <Button type="button" label="Submit"/>
                    </div>

                    <h3>Vertical Checkbox</h3>
                    <div className="p-field-checkbox">
                        <Checkbox inputId="city1" value="Chicago" onChange={onCityChange1} checked={cities1.indexOf('Chicago') !== -1}/>
                        <label htmlFor="city1">Chicago</label>
                    </div>
                    <div className="p-field-checkbox">
                        <Checkbox inputId="city2" value="Los Angeles" onChange={onCityChange1} checked={cities1.indexOf('Los Angeles') !== -1}/>
                        <label htmlFor="city2">Los Angeles</label>
                    </div>

                    <h3>Horizontal Checkbox</h3>
                    <div className="p-formgroup-inline">
                        <div className="p-field-checkbox">
                            <Checkbox inputId="city3" value="Chicago" onChange={onCityChange2} checked={cities2.indexOf('Chicago') !== -1}/>
                            <label htmlFor="city3">Chicago</label>
                        </div>
                        <div className="p-field-checkbox">
                            <Checkbox inputId="city4" value="Los Angeles" onChange={onCityChange2} checked={cities2.indexOf('Los Angeles') !== -1}/>
                            <label htmlFor="city4">Los Angeles</label>
                        </div>
                    </div>

                    <h3>Vertical RadioButton</h3>
                    <div className="p-field-radiobutton">
                        <RadioButton inputId="city5" name="city1" value="Chicago" onChange={e => setCity1(e.value)} checked={city1 === 'Chicago'} />
                        <label htmlFor="city5">Chicago</label>
                    </div>
                    <div className="p-field-radiobutton">
                        <RadioButton inputId="city6" name="city1" value="Los Angeles" onChange={e => setCity1(e.value)} checked={city1 === 'Los Angeles'} />
                        <label htmlFor="city6">Los Angeles</label>
                    </div>

                    <h3>Horizontal RadioButton</h3>
                    <div className="p-formgroup-inline">
                        <div className="p-field-checkbox">
                            <RadioButton inputId="city5" name="city2" value="Chicago" onChange={e => setCity2(e.value)} checked={city2 === 'Chicago'} />
                            <label htmlFor="city7">Chicago</label>
                        </div>
                        <div className="p-field-checkbox">
                            <RadioButton inputId="city8" name="city2" value="Los Angeles" onChange={e => setCity2(e.value)} checked={city2 === 'Los Angeles'} />
                            <label htmlFor="city8">Los Angeles</label>
                        </div>
                    </div>

                    <h3>Help Text</h3>
                    <div className="p-field p-fluid">
                        <label htmlFor="username">Username</label>
                        <InputText id="username" type="username" aria-describedby="username-help"/>
                        <small id="username-help">Enter your username to reset your password.</small>
                    </div>

                    <h3>Advanced</h3>
                    <div className="p-fluid p-formgrid p-grid">
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="firstname6">Firstname</label>
                            <InputText id="firstname6" type="text" />
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="lastname6">Lastname</label>
                            <InputText id="lastname6" type="text" />
                        </div>
                        <div className="p-field p-col-12">
                            <label htmlFor="address">Address</label>
                            <InputTextarea id="address" type="text" rows="4" />
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="city">City</label>
                            <InputText id="city" type="text" />
                        </div>
                        <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="state">State</label>
                            <Dropdown inputId="state" value={selectedState} options={states} onChange={onStateChange} placeholder="Select" optionLabel="name"/>
                        </div>
                        <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="zip">Zip</label>
                            <InputText id="zip" type="text" />
                        </div>
                    </div>
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
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/formlayout" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="FormLayoutDemo" sources={this.sources} activeButtonIndex={this.state.activeIndex - 1} />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

        return (
            <div className="content-section documentation">
                <TabView activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })}>
                    <TabPanel header="Documentation">
                        <h3>Install</h3>
                        <p>PrimeFlex is available at npm, if you have an existing application run the following command to download it to your project.</p>
                        <CodeHighlight className="language-javascript">
{`
npm install primeflex --save

`}
                        </CodeHighlight>

                        <p>Then add the primeflex.css to your application</p>
                        <CodeHighlight className="language-javascript">
                            {`
import 'primeflex/primeflex.css';

`}
                        </CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>Core member of the FormLayout is the <i>.p-field</i> class that wraps the input field and the associated label.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<div className="p-field">
    <label htmlFor="fieldId">Label</label>
    <InputText id="fieldId" type="text"/>
</div>

`}
                        </CodeHighlight>

                        <h3>Vertical Layout</h3>
                        <p>In its simplest form, a vertical layout is created when used within <i>.p-fluid</i> which makes the components use all available width.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<div className="p-fluid">
    <div className="p-field">
        <label htmlFor="firstname1">Firstname</label>
        <InputText id="firstname1" type="text"/>
    </div>
    <div className="p-field">
        <label htmlFor="lastname1">Lastname</label>
        <InputText id="lastname1" type="text"/>
    </div>
</div>

`}
                        </CodeHighlight>

                        <h3>Vertical Layout with Grid</h3>
                        <p>This is where FormLayout actually hooks-in to PrimeFlex with the help of <i>.p-formgrid</i> class to optimize the content for form design. Example
                            below arranges two fields to be displayed next two each other.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<div className="p-fluid p-formgrid p-grid">
    <div className="p-field p-col">
        <label htmlFor="firstname2">Firstname</label>
        <InputText id="firstname2" type="text"/>
    </div>
    <div className="p-field p-col">
        <label htmlFor="lastname2">Lastname</label>
        <InputText id="lastname2" type="text"/>
    </div>
</div>

`}
                        </CodeHighlight>

                        <h3>Horizontal and Fixed Width</h3>
                        <p>In horizontal form, label of the field is displayed on the same row of the input as opposed to the vertical alternative. In this
                            example, label has a fixed width where container of the inputs gets the remaining space.
                        </p>
                        <CodeHighlight className="language-jsx">
                            {`
<div className="p-field p-grid">
    <label htmlFor="firstname3" className="p-col-fixed" style={{width:'100px'}}>Firstname</label>
    <div className="p-col">
        <InputText id="firstname3" type="text"/>
    </div>
</div>
<div className="p-field p-grid">
    <label htmlFor="lastname3" className="p-col-fixed" style={{width:'100px'}}>Lastname</label>
    <div className="p-col">
        <InputText id="lastname3" type="text"/>
    </div>
</div>

`}
                        </CodeHighlight>

                        <h3>Horizontal and Fluid</h3>
                        <p>Wrapping the form in the previous example with <i>.p-fluid</i> and removing the fixed width results in a fluid layout.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<div className="p-fluid">
    <div className="p-field p-grid">
        <label htmlFor="firstname4" className="p-col-12 p-md-2">Firstname</label>
        <div className="p-col-12 p-md-10">
            <InputText id="firstname4" type="text"/>
        </div>
    </div>
    <div className="p-field p-grid">
        <label htmlFor="lastname4" className="p-col-12 p-md-2">Lastname</label>
        <div className="p-col-12 p-md-10">
            <InputText id="lastname4" type="text"/>
        </div>
    </div>
</div>

`}
                        </CodeHighlight>

                        <h3>Inline</h3>
                        <p>Inline forms are used to display the content on the same row and can simply be implemented by adding <i>.p-formgroup-inline</i> to the form container. Note that per design requirements, if labels
                            are not visually hidden, it is suggested to use <i>.p-sr-only</i> to still support screen readers.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<div className="p-formgroup-inline">
    <div className="p-field">
        <label htmlFor="firstname5" className="p-sr-only">Firstname</label>
        <InputText id="firstname5" type="text" placeholder="Firstname"/>
    </div>
    <div className="p-field">
        <label htmlFor="lastname5" className="p-sr-only">Lastname</label>
        <InputText id="lastname5" type="text" placeholder="Lastname"/>
    </div>
    <Button type="button" label="Submit"/>
</div>

`}
                        </CodeHighlight>

                        <h3>Checkbox and RadioButton</h3>
                        <p>Checkbox and RadioButton have exclusive layout support via <i>.p-field-checkbox</i> and <i>.p-field-radiobutton</i> classes respectively.
                            Examples here demonstrates vertical and horizontal layout alternatives.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<h3>Vertical Checkbox</h3>
<div className="p-field-checkbox">
    <Checkbox inputId="city1" value="Chicago" onChange={this.onCityChange1} checked={this.state.cities1.indexOf('Chicago') !== -1}/>
    <label htmlFor="city1">Chicago</label>
</div>
<div className="p-field-checkbox">
    <Checkbox inputId="city2" value="Los Angeles" onChange={this.onCityChange1} checked={this.state.cities1.indexOf('Los Angeles') !== -1}/>
    <label htmlFor="city2">Los Angeles</label>
</div>

<h3>Horizontal Checkbox</h3>
<div className="p-formgroup-inline">
    <div className="p-field-checkbox">
        <Checkbox inputId="city3" value="Chicago" onChange={this.onCityChange2} checked={this.state.cities2.indexOf('Chicago') !== -1}/>
        <label htmlFor="city3">Chicago</label>
    </div>
    <div className="p-field-checkbox">
        <Checkbox inputId="city4" value="Los Angeles" onChange={this.onCityChange2} checked={this.state.cities2.indexOf('Los Angeles') !== -1}/>
        <label htmlFor="city4">Los Angeles</label>
    </div>
</div>

`}
                        </CodeHighlight>
                        <CodeHighlight className="language-jsx">
                            {`
<h3>Vertical RadioButton</h3>
<div className="p-field-radiobutton">
    <RadioButton inputId="city5" name="city1" value="Chicago" onChange={(e) => this.setState({city1: e.value})} checked={this.state.city1 === 'Chicago'} />
    <label htmlFor="city5">Chicago</label>
</div>
<div className="p-field-radiobutton">
    <RadioButton inputId="city6" name="city1" value="Los Angeles" onChange={(e) => this.setState({city1: e.value})} checked={this.state.city1 === 'Los Angeles'} />
    <label htmlFor="city6">Los Angeles</label>
</div>

<h3>Horizontal RadioButton</h3>
<div className="p-formgroup-inline">
    <div className="p-field-checkbox">
        <RadioButton inputId="city5" name="city2" value="Chicago" onChange={(e) => this.setState({city2: e.value})} checked={this.state.city2 === 'Chicago'} />
        <label htmlFor="city7">Chicago</label>
    </div>
    <div className="p-field-checkbox">
        <RadioButton inputId="city8" name="city2" value="Los Angeles" onChange={(e) => this.setState({city2: e.value})} checked={this.state.city2 === 'Los Angeles'} />
        <label htmlFor="city8">Los Angeles</label>
    </div>
</div>

`}
                        </CodeHighlight>

                        <h3>Helper text</h3>
                        <p>Helper text is an optional element defined with the <i>small</i> tag to display additional information about the input field.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<div className="p-field p-fluid">
    <label htmlFor="username">Username</label>
    <InputText id="username" type="username" aria-describedby="username-help"/>
    <small id="username-help">Enter your username to reset your password.</small>
</div>

`}
                        </CodeHighlight>

                        <h3>Advanced Forms</h3>
                        <p>A responsive form with various input fields can easily be implemented using a combination of <i>.p-field</i>, <i>.p-formgrid</i> and <i>.p-fluid</i>.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<div className="p-fluid p-formgrid p-grid">
    <div className="p-field p-col-12 p-md-6">
        <label htmlFor="firstname6">Firstname</label>
        <InputText id="firstname6" type="text" />
    </div>
    <div className="p-field p-col-12 p-md-6">
        <label htmlFor="lastname6">Lastname</label>
        <InputText id="lastname6" type="text" />
    </div>
    <div className="p-field p-col-12">
        <label htmlFor="address">Address</label>
        <InputTextarea id="address" type="text" rows="4" />
    </div>
    <div className="p-field p-col-12 p-md-6">
        <label htmlFor="city">City</label>
        <InputText id="city" type="text" />
    </div>
    <div className="p-field p-col-12 p-md-3">
        <label htmlFor="state">State</label>
        <Dropdown inputId="state" value={this.state.selectedState} options={this.states} onChange={this.onStateChange} placeholder="Select" optionLabel="name"/>
    </div>
    <div className="p-field p-col-12 p-md-3">
        <label htmlFor="zip">Zip</label>
        <InputText id="zip" type="text" />
    </div>
</div>

`}
                        </CodeHighlight>

                        <h3>Customization</h3>
                        <p>FormLayout comes with sensible defaults, in case these values need to be customized suggested
                            way is building <a
                                href="https://github.com/primefaces/primeflex/blob/master/primeflex.scss">primeflex.scss</a> with
                            your on variables.</p>

                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                <tr>
                                    <th>Variable</th>
                                    <th>Default</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>$fieldMargin</td>
                                    <td>1em</td>
                                </tr>
                                <tr>
                                    <td>$fieldLabelMargin</td>
                                    <td>.5em</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </TabPanel>

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
