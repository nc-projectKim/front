import React, { Component } from 'react';
import EditNote from './EditNote';
import FilteredNotesList from './FilteredNotesList';

const notes = {
    '-KpG7jiyD6sVSRLV5eaC': {
        'created': 1500304832915,
        'lastEditTime': 1500304832915,
        'tags': ['code', 'firebase'],
        'text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque illo unde eveniet eius, tenetur a tempore fuga, totam inventore dolore, debitis et qui deserunt aperiam facilis. Illo animi nisi cum quaerat quia debitis facilis aut, voluptate enim iusto id corporis ea eum saepe temporibus obcaecati rem ipsum perferendis vitae assumenda. Molestias incidunt consectetur temporibus repudiandae ullam atque, nostrum, error suscipit omnis sint iusto praesentium ipsa cumque repellendus tempora iste in dignissimos voluptatibus beatae minima! Laboriosam accusantium adipisci fuga tenetur impedit repellendus error quisquam, alias, aliquam et, incidunt, laborum eaque assumenda culpa expedita quidem voluptatum. Tempore, sequi veniam, earum rem dolor delectus aliquid natus! Omnis quaerat voluptatibus, rerum deserunt quibusdam quasi error sint necessitatibus voluptates nesciunt alias corrupti maxime dolores ipsum amet expedita laborum, unde rem. Cum esse velit quis error consectetur vel possimus voluptatibus aliquid suscipit veritatis, et, placeat molestias explicabo quaerat! Odio recusandae natus ex, perspiciatis repellat eaque debitis dolorem deleniti, necessitatibus harum consequuntur dolorum illo unde expedita eveniet officia id quo incidunt optio. Voluptatum ex esse ab veniam accusantium necessitatibus eos facere enim obcaecati qui. Asperiores, possimus. Amet molestias voluptatem error, voluptas id voluptate, quam perspiciatis sequi iste dolor reiciendis eveniet possimus esse. Nemo ab illo iste! Dolore soluta fugit, pariatur in ducimus harum reprehenderit itaque explicabo. In temporibus ab animi! Sit corrupti facere officia. Eos placeat eaque illo perferendis a, nobis sed numquam voluptates reiciendis quam, facilis mollitia dolorum ullam odit fugit qui ratione, enim ea laboriosam vel eligendi nostrum. Recusandae debitis voluptas consequuntur atque sequi maiores cum odio ad et temporibus, necessitatibus, rerum, optio explicabo pariatur quia esse! Quia nihil tempore illo id obcaecati alias, voluptate iure, amet placeat at neque quibusdam. Porro labore repudiandae quasi praesentium pariatur suscipit iure repellat totam illum nostrum! Laborum amet minima officia molestias, ducimus ad corporis nam inventore quasi dolores quisquam, culpa, voluptas voluptates repellat, sed ab dolorem officiis a excepturi. Deserunt nesciunt officia dolor in quasi, veniam, quam, natus nam nobis amet, totam expedita fugiat fugit. Magnam aliquid perferendis, dolor quae itaque cupiditate animi nam impedit autem enim non necessitatibus reiciendis facere id ullam alias illo voluptatem, soluta, consectetur qui sint odit ex quod. Ullam, dolorum alias pariatur excepturi delectus ducimus quas hic voluptas vero sint illo assumenda velit distinctio quis aliquam culpa amet repellat possimus minus tenetur. Repudiandae ratione illo, eveniet quam illum, reprehenderit eaque aspernatur aliquid facere repellendus numquam quae alias quaerat cumque explicabo suscipit est nostrum. Amet atque, voluptatem ab sint. Nulla unde est veniam optio, facere vero tempora autem dicta reprehenderit eius quisquam molestias qui impedit illo vitae iure voluptatum quae ab sit porro similique harum dolor quasi nisi. Laudantium, temporibus esse dignissimos est cupiditate quisquam earum ex aliquam quaerat facilis velit commodi neque consequuntur nisi consequatur placeat rerum corporis amet. Cum excepturi, eius quisquam voluptate! Corporis laboriosam ipsam, dolores natus perspiciatis animi dolore deleniti, quas, neque reiciendis sapiente dolor delectus ratione consequatur tempore impedit. Laudantium impedit tenetur, autem aliquid praesentium, quis mollitia veniam voluptas quod nesciunt dolorem pariatur illum! Impedit sit quia doloribus, commodi!',
        'title': 'War And Peace'
    },
    '-KpG89jvcYEOHUaM4Fpe': {
        'created': 1500304943481,
        'lastEditTime': 1500304943481,
        'tags': ['code', 'firebase'],
        'text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque accusamus fugit deserunt quia molestiae voluptates, iusto quam quae provident officiis sunt optio nobis in eum accusantium laboriosam. Vero nostrum, ducimus.',
        'title': 'Peace and War'
    }
};

class FilteredNotes extends Component {
    constructor (props) {
        super(props);
        this.state = {
            edit: false,
            noteId: ''
        };
        this.editNote = this.editNote.bind(this);
    }
    render () {
        return (
            <div className="FilteredNotes-main">
                {this.state.edit
                    ? <EditNote editNote={this.editNote} note={notes[this.state.noteId]} />
                    : <FilteredNotesList
                        view={this.state.view}
                        notes={notes}
                        addNewNote={this.addNewNote}
                        viewMore={this.viewMore}
                        editNote={this.editNote}
                    />
                }
            </div>
        );
    }
    editNote (id) {
        this.setState({
            edit: !this.state.edit,
            noteId: id
        });
    }
}

export default FilteredNotes;