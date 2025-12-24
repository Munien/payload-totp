/* eslint-disable no-restricted-exports */ 'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useCallback, useRef } from 'react';
import { cn } from '../../utilities/cn.js';
import styles from './index.module.scss';
export default function OTPInput({ name, disabled, length = 6, onFilled }) {
    const inputs = useRef(Array(length).fill(null));
    const hiddenInput = useRef(null);
    const isFilled = hiddenInput.current?.value.length === length;
    const moveToPrev = (currentIndex)=>{
        if (currentIndex > 0) {
            const prevInput = inputs.current[currentIndex - 1];
            if (prevInput) {
                focusAndSelectInput(prevInput);
            }
        }
    };
    const moveToNext = useCallback((currentIndex)=>{
        if (currentIndex < length - 1) {
            const nextInput = inputs.current[currentIndex + 1];
            if (nextInput) {
                focusAndSelectInput(nextInput);
            }
        }
    }, [
        length
    ]);
    const updateInputValue = useCallback(()=>{
        if (hiddenInput.current) {
            const value = inputs.current.filter(Boolean).map((e)=>e.value).join('');
            hiddenInput.current.value = value;
            if (onFilled && value.length === length) {
                onFilled(value);
            }
        }
    }, [
        onFilled,
        length
    ]);
    const onInput = (event, index)=>{
        const nativeEvent = event.nativeEvent;
        if (nativeEvent.inputType === 'deleteContentBackward') {
            moveToPrev(index);
        } else if (nativeEvent.inputType === 'insertText' || nativeEvent.inputType === 'deleteContentForward') {
            moveToNext(index);
        }
        updateInputValue();
    };
    const onKeyDown = useCallback((event, index)=>{
        if (event.nativeEvent.altKey || event.ctrlKey || event.metaKey) {
            return;
        }
        const target = event.target;
        const isDigitKey = /^\d$/.test(event.key);
        const isNumericKey = isDigitKey || event.code?.startsWith('Digit') || event.code?.startsWith('Numpad') || event.key === 'Unidentified';
        switch(event.key){
            case 'ArrowDown':
            case 'ArrowUp':
                event.preventDefault();
                break;
            case 'ArrowLeft':
                moveToPrev(index);
                event.preventDefault();
                break;
            case 'ArrowRight':
                moveToNext(index);
                event.preventDefault();
                break;
            case 'Backspace':
                if (target.value.length === 0) {
                    moveToPrev(index);
                    updateInputValue();
                    event.preventDefault();
                } else if (target.selectionStart === 0) {
                    target.value = '';
                    moveToPrev(index);
                    updateInputValue();
                    event.preventDefault();
                }
                break;
            default:
                if (!isNumericKey) {
                    event.preventDefault();
                }
                if (isDigitKey && target.value.length >= 1) {
                    event.preventDefault();
                    target.value = event.key;
                    updateInputValue();
                    moveToNext(index);
                }
                break;
        }
    }, [
        moveToNext,
        updateInputValue
    ]);
    const onPaste = useCallback((event)=>{
        event.preventDefault();
        if (!disabled) {
            let paste = event.clipboardData.getData('text').trim().split('').filter((ch)=>!isNaN(parseInt(ch)));
            if (paste.length > length) {
                paste = paste.slice(0, length);
            }
            paste.forEach((char, index)=>{
                const el = inputs.current[index];
                if (el) {
                    el.value = char;
                }
            });
            focusAndSelectInput(inputs.current[paste.length - 1]);
            updateInputValue();
        }
    }, [
        length,
        disabled,
        updateInputValue
    ]);
    const onHiddenInput = useCallback((event)=>{
        if (disabled) {
            return;
        }
        const rawValue = event.currentTarget.value;
        let sanitizedValue = rawValue.trim().split('').filter((ch)=>!isNaN(parseInt(ch)));
        if (sanitizedValue.length > length) {
            sanitizedValue = sanitizedValue.slice(0, length);
        }
        sanitizedValue.forEach((char, index)=>{
            const el = inputs.current[index];
            if (el) {
                el.value = char;
            }
        });
        focusAndSelectInput(inputs.current[sanitizedValue.length - 1]);
        if (onFilled && sanitizedValue.length === length) {
            onFilled(sanitizedValue.join(''));
        }
    }, [
        length,
        disabled,
        onFilled
    ]);
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx("input", {
                autoComplete: "one-time-code",
                inputMode: "numeric",
                name: name,
                onInput: (e)=>onHiddenInput(e),
                ref: hiddenInput,
                style: {
                    border: 0,
                    clip: 'rect(0,0,0,0)',
                    height: '1px',
                    margin: '-1px',
                    overflow: 'hidden',
                    padding: 0,
                    position: 'absolute',
                    width: '1px'
                }
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: cn(styles.root, disabled && styles.disabled),
                children: [
                    Array.from({
                        length
                    }, (_, index)=>index).map((i)=>// eslint-disable-next-line jsx-a11y/control-has-associated-label
                        /*#__PURE__*/ _jsx("input", {
                            // eslint-disable-next-line jsx-a11y/no-autofocus
                            autoFocus: i === 0,
                            // Tell 1password to ignore this input
                            // https://developer.1password.com/docs/web/compatible-website-design
                            "data-1p-ignore": true,
                            disabled: disabled,
                            inputMode: "numeric",
                            maxLength: 1,
                            onInput: (e)=>onInput(e, i),
                            onKeyDown: (e)=>onKeyDown(e, i),
                            onPaste: (e)=>onPaste(e),
                            ref: (el)=>{
                                if (el) {
                                    inputs.current[i] = el;
                                }
                            },
                            type: "text"
                        }, i)),
                    /*#__PURE__*/ _jsx("div", {
                        className: styles.focus
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: cn(styles.glow, isFilled && styles.expandGlow),
                        children: Array.from({
                            length
                        }, (_, index)=>index).map((i)=>/*#__PURE__*/ _jsx("div", {}, i))
                    })
                ]
            })
        ]
    });
}
function focusAndSelectInput(element) {
    element.focus();
    element.select();
}

//# sourceMappingURL=index.js.map