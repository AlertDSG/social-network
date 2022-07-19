import React, {ChangeEvent, useState} from 'react';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatus = (props: PropsType) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)

    }
    const onBlurHandler = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    return (
        <div>
            {!editMode
                ?
                <div>
                    <span>Status: </span><span onDoubleClick={() => {
                        setEditMode(true)
                    }}>{props.status}</span>
                </div>
                :
                <div>
                    <input value={status} onChange={onChangeHandler} autoFocus onBlur={onBlurHandler}/>
                </div>
            }
        </div>
    );
};
