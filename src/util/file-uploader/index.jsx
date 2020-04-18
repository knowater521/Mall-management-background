import React from 'react';
import FileUpload from './react-fileupload.jsx';

class FileUploader extends React.Component{
    render(){
        /*set properties*/
        const options={
            baseUrl:'/manage/product/upload.do',//http://127.0.0.1
            fileFieldName : 'upload_file',
            dataType : 'json',
            chooseAndUpload : true,
            uploadSuccess : (res)=> {
                this.props.onsuccess(res.data);
            },
            //(res) => {
                //console.log(res);
            //},
            uploadError : (err)=> {
                this.props.onerror(err.message || '上传图片出错啦');
            }
            //(err) => {
            //                 console.log(err);
            //             }
            //param:{
                //fid:0
            //}
        }
        /*Use FileUpload with options*/
        /*Set two dom with ref*/
        return (
            <FileUpload options={options}>
                <button className="btn btn-xs btn-default" ref="chooseAndUpload">请选择图片</button>

            </FileUpload>
        )
    }
}
export default FileUploader;
//<!--<button ref="uploadBtn">upload</button>-->