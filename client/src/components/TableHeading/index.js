function TableHeading(props) {
    return (
        <th scope="col">
            {props.children}
        </th>
    );
}

export default TableHeading;