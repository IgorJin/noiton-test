// class FileUploader extends React.Component<Props, State> {
//   static counter = 0;
//   fileUploaderInput: HTMLElement | null = null;

//   constructor(props: Props) {
//     super(props);
//     this.state = { dragging: false, file: null };
//   }

//   dragEventCounter = 0;
//   dragenterListener = (event: React.DragEvent<HTMLDivElement>) => {
//     this.overrideEventDefaults(event);
//     this.dragEventCounter++;
//     if (event.dataTransfer.items && event.dataTransfer.items[0]) {
//       this.setState({ dragging: true });
//     } else if (
//       event.dataTransfer.types &&
//       event.dataTransfer.types[0] === "Files"
//     ) {
//       // This block handles support for IE - if you're not worried about
//       // that, you can omit this
//       this.setState({ dragging: true });
//     }
//   };

//   dragleaveListener = (event: React.DragEvent<HTMLDivElement>) => {
//     this.overrideEventDefaults(event);
//     this.dragEventCounter--;

//     if (this.dragEventCounter === 0) {
//       this.setState({ dragging: false });
//     }
//   };

//   dropListener = (event: React.DragEvent<HTMLDivElement>) => {
//     this.overrideEventDefaults(event);
//     this.dragEventCounter = 0;
//     this.setState({ dragging: false });

//     if (event.dataTransfer.files && event.dataTransfer.files[0]) {
//       this.setState({ file: event.dataTransfer.files[0] });
//     }
//   };

//   overrideEventDefaults = (event: Event | React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();
//     event.stopPropagation();
//   };

//   onSelectFileClick = () => {
//     this.fileUploaderInput && this.fileUploaderInput.click();
//   };

//   onFileChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files[0]) {
//       this.setState({ file: event.target.files[0] });
//     }
//   };

//   componentDidMount() {
//     window.addEventListener("dragover", (event: Event) => {
//       this.overrideEventDefaults(event);
//     });
//     window.addEventListener("drop", (event: Event) => {
//       this.overrideEventDefaults(event);
//     });
//   }

//   componentWillUnmount() {
//     window.removeEventListener("dragover", this.overrideEventDefaults);
//     window.removeEventListener("drop", this.overrideEventDefaults);
//   }

//   render() {
//     return (
//       <FileUploaderPresentationalComponent
//         dragging={this.state.dragging}
//         file={this.state.file}
//         onSelectFileClick={this.onSelectFileClick}
//         onDrag={this.overrideEventDefaults}
//         onDragStart={this.overrideEventDefaults}
//         onDragEnd={this.overrideEventDefaults}
//         onDragOver={this.overrideEventDefaults}
//         onDragEnter={this.dragenterListener}
//         onDragLeave={this.dragleaveListener}
//         onDrop={this.dropListener}
//       >
//         <input
//           ref={el => (this.fileUploaderInput = el)}
//           type="file"
//           className="file-uploader__input"
//           onChange={this.onFileChanged}
//         />
//       </FileUploaderPresentationalComponent>
//     );
//   }
// }

// //---------------------------

// type PresentationalProps = {
//     dragging: boolean;
//     file: File | null;
//     onSelectFileClick: () => void;
//     onDrag: (event: React.DragEvent<HTMLDivElement>) => void;
//     onDragStart: (event: React.DragEvent<HTMLDivElement>) => void;
//     onDragEnd: (event: React.DragEvent<HTMLDivElement>) => void;
//     onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
//     onDragEnter: (event: React.DragEvent<HTMLDivElement>) => void;
//     onDragLeave: (event: React.DragEvent<HTMLDivElement>) => void;
//     onDrop: (event: React.DragEvent<HTMLDivElement>) => void;
//   };
  
//   export const FileUploaderPresentationalComponent: React.SFC<
//     PresentationalProps
//   > = props => {
//     const {
//       dragging,
//       file,
//       onSelectFileClick,
//       onDrag,
//       onDragStart,
//       onDragEnd,
//       onDragOver,
//       onDragEnter,
//       onDragLeave,
//       onDrop
//     } = props;
  
//     let uploaderClasses = "file-uploader";
//     if (dragging) {
//       uploaderClasses += " file-uploader--dragging";
//     }
  
//     const fileName = file ? file.name : "No File Uploaded!";
  
//     return (
//       <div
//         className={uploaderClasses}
//         onDrag={onDrag}
//         onDragStart={onDragStart}
//         onDragEnd={onDragEnd}
//         onDragOver={onDragOver}
//         onDragEnter={onDragEnter}
//         onDragLeave={onDragLeave}
//         onDrop={onDrop}
//       >
//         <div className="file-uploader__contents">
//           <span className="file-uploader__file-name">{fileName}</span>
//           <span>Drag & Drop File</span>
//           <span>or</span>
//           <span onClick={onSelectFileClick}>
//             Select File
//           </span>
//         </div>
//         {props.children}
//       </div>
//     );
//   };