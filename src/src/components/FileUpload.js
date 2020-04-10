import React, {useState, useEffect} from 'react'
import Main from './Main'
import './index.css'


const FileUploaderPresentationalComponent = (props) => {
    const { 
        dragging,
        file,
        onSelectFileClick,
        onDrag,
        onDragStart,
        onDragEnd,
        onDragOver,
        onDragEnter,
        onDragLeave,
        onDrop,
        removeFile
    } = props

    let uploaderClasses = "file-uploader";
    if (dragging) {
        uploaderClasses += " file-uploader--dragging";
    }
    const fileName = file ? file.name : "No File Uploaded!";
    const item_drop = !!file

    return (
        <div
            style={{position: "relative"}}
            onDrag={onDrag}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onDragOver={onDragOver}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
        >   
            <Main onSelectFileClick={onSelectFileClick} fileName={fileName} dragClass={uploaderClasses} item_drop={item_drop} removeFile = {removeFile}>
                {props.children}
            </Main>
        </div>
    )
}



const FileUpload = (props) => {
    let counter = 0;
    let fileUploaderInput = null;
    let dragEventCounter = 0;

    const [dragging, setDragging] = useState(false)
    const [file, setFile] = useState(null)

    const overrideEventDefaults = (event) => {
        event.preventDefault();
        event.stopPropagation();
      };

    const dragenterListener = (event) => {
        console.log(event.dataTransfer.items);
        overrideEventDefaults(event);
        dragEventCounter++;
        console.log(dragEventCounter);
        if (event.dataTransfer.items && event.dataTransfer.items[0]) {
            setDragging(true)
        } else if (
          event.dataTransfer.types &&
          event.dataTransfer.types[0] === "Files"
        ) {
          setDragging(true)
        }
      };

    const dragleaveListener = (event) => {
        overrideEventDefaults(event);
        dragEventCounter--;
        console.log(dragEventCounter);
        if (dragEventCounter == 0) {
            setDragging(false)
        }
    };

    const dropListener = (event) => {
        console.log('DROP')
        console.log(event.dataTransfer.files);
        overrideEventDefaults(event);
        dragEventCounter = 0;
        setDragging(false)
    
        if (event.dataTransfer.files && event.dataTransfer.files[0]) {
          setFile(event.dataTransfer.files[0])
        }
    };

    const onSelectFileClick = () => {
        fileUploaderInput && fileUploaderInput.click();
    };
    
    const onFileChanged = (event) => {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0])
        }
    };

    const removeFile = () =>{
        setFile(null)
    }

    useEffect(()=> {
        window.addEventListener("dragover", (event) => {
            overrideEventDefaults(event);
        });
        window.addEventListener("drop", (event) => {
            overrideEventDefaults(event);
        });
        return function remove() {
            window.removeEventListener("dragover", overrideEventDefaults);
            window.removeEventListener("drop", overrideEventDefaults);
        }
    })

    return (
            <FileUploaderPresentationalComponent
                dragging={dragging}
                file={file}
                onSelectFileClick={onSelectFileClick}
                onDrag={overrideEventDefaults}
                onDragStart={overrideEventDefaults}
                onDragEnd={overrideEventDefaults}
                onDragOver={overrideEventDefaults}
                onDragEnter={dragenterListener}
                onDragLeave={dragleaveListener}
                onDrop={dropListener}
                removeFile = {removeFile}
            >   
                <input
                    ref={el => (fileUploaderInput = el)}
                    type="file"
                    className="file-uploader__input"
                    onChange={onFileChanged}
                />
            </FileUploaderPresentationalComponent>
    )
}

export default FileUpload;