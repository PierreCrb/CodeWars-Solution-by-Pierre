def first_non_repeating_letter(string):
   
    lower_string = string.lower()
    i = 0
    
    while i < len(lower_string):
        array = [j for j, ltr in enumerate(lower_string) if ltr == lower_string[i]]
        if len(array) <= 1:
            return string[i]
        i += 1
    
    return ''