r
section .data
    base db "your_base_string_here", 0 ; Placeholder for base string
    remove db "your_remove_string_here", 0 ; Placeholder for remove string
    arr resb 256 ; Reserve space for the resulting string (adjust size as needed)

section .bss
    count resd 1
    i resd 1

section .text
    global _start

_start:
    ; Initialize count and i
    mov dword [count], 0
    mov dword [i], 0

    ; Get lengths of base and remove strings
    mov rdi, base
    call strlen
    mov rsi, rax ; rsi = length of base

    mov rdi, remove
    call strlen
    mov rdx, rax ; rdx = length of remove

.loop1:
    ; Check if we can compare the substring
    mov eax, [i]
    cmp eax, [rsi]
    jge .copy_remaining ; If i >= length of base, copy remaining characters

    ; Compare substring
    mov rdi, base
    add rdi, rax ; rdi = base + i
    mov rsi, remove
    mov rdx, [i]
    call strncasecmp ; Compare base substring with remove string

    ; If equal, skip the length of remove
    cmp rax, 0
    je .skip_remove

    ; If not equal, copy character to arr
    mov rax, [i]
    movzx rbx, byte [base + rax] ; Load character from base
    mov rdi, arr
    mov rax, [count]
    mov [rdi + rax], bl ; Store character in arr
    inc dword [count] ; Increment count
    inc dword [i] ; Increment i
    jmp .loop1

.skip_remove:
    ; Skip the length of remove
    add dword [i], rdx
    jmp .loop1

.copy_remaining:
    ; Copy remaining characters
    mov eax, [i]
    mov rsi, base
    add rsi, rax
    mov rdx, [count]
    
.copy_loop:
    cmp eax, [rsi]
    jge .done_copying ; If i >= length of base, done copying
    movzx rbx, byte [rsi + eax]
    mov rdi, arr
    mov [rdi + rdx], bl ; Store character in arr
    inc dword [count] ; Increment count
    inc eax ; Increment i
    jmp .copy_loop

.done_copying:
    ; Create new string from arr
    mov rdi, arr
    mov rsi, [count]
    call create_string ; Function to create a new string from arr

    ; Exit program
    mov rax, 60 ; syscall: exit
    xor rdi, rdi ; status: 0
    syscall

; Function to calculate string length
strlen:
    xor rax, rax
    .strlen_loop:
        cmp byte [rdi + rax], 0
        je .strlen_done
        inc rax
        jmp .strlen_loop
    .strlen_done:
        ret

; Function to compare two strings case-insensitively
strncasecmp:
    ; Implementation of case-insensitive comparison
    ; Returns 0 if equal, non-zero otherwise
    ret

; Function to create a new string from arr
create_string:
    ; Implementation to create a new string from arr
    ret
