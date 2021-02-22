function TableHead(props) {
    return (
        <thead className="thead-dark">
            {props.children}
        </thead>
    );
}

export default TableHead;