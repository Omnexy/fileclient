import React, {FC, useState} from 'react';
import cl from './Dropzone.module.css';

const Dropzone:FC = () => {

    const [isDragOver, setIsDragOver] = useState<boolean>(false);

    const onDropHandler = (e: React.DragEvent<HTMLDivElement>) => {

        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.style.background = 'lightgrey';

        if(e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            console.log(e.dataTransfer.files);
        }

        setIsDragOver(false);
    }

    function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
        //e.preventDefault();
        e.stopPropagation();
        e.currentTarget.style.background = 'lightgrey';
        setIsDragOver(false);
    }

    function dragEndHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.style.background = 'lightgrey';
    }

    function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
        e.stopPropagation();
        e.preventDefault();
        e.currentTarget.style.background = 'grey';
        setIsDragOver(true);
    }

    return (
        <div
            className={cl.dropzone}
            onDrop={e => onDropHandler(e)}
            onDragOver={e => dragOverHandler(e)}
            onDragLeave={e => dragLeaveHandler(e)}
            onDragEnd={e => dragEndHandler(e)}
        >
            {isDragOver ? <> Дропай сюда </> : null}
        </div>
    );
};

export default Dropzone;