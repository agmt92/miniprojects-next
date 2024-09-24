import { NoteStyle, Icons, DeleteIconStyle } from '../../note-app/NoteStyle';
import { MdOutlineNoteAdd, MdDeleteForever } from "react-icons/md"

interface NoteProps {
    note: {
        id: string;
        content: string;
    };
    onClick: (id: string) => void;
    text: string;        
    };


export default function Note({note, onClick, text}: NoteProps) {
  return (
    <NoteStyle className="card">
      
      <div className="card-header text-right">
        <Icons>
            <MdOutlineNoteAdd style={{ cursor: "not-allowed"}} />
            <DeleteIconStyle>
                <MdDeleteForever onClick={() => onClick(note.id)}/>
            </DeleteIconStyle>
        </Icons>
      </div>
        <div className="card-body">
            <textarea 
            name="" 
            id=""
            style={{
                border: 'none',
                outline: 'none',
            }}
            >{text}</textarea>
        </div>
    </NoteStyle>
  )
}
