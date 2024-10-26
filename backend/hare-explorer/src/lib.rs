#[no_mangle]
pub fn activate(register_command: fn(id:String, callback: fn(data:&String)-> Result<&str, &str>)) {
    register_command("fileExplorer.renameFolder".to_string(), hello);
    register_command("fileExplorer.renameFile".to_string(), hello2);
}

fn hello(data:&String) -> Result<&str, &str> {
    let mut my_data = data.clone();

    if my_data.chars().count() == 0 {
        println!("Setup call");
        return Err(&"Setup")
    }

    println!("{}",my_data);
    Ok(&"Helaaalo")
}

fn hello2(data:&String) -> Result<&str, &str> {
    let mut my_data = data.clone();

    if my_data.chars().count() == 0 {
        println!("Setup call");
        return Err(&"Setup")
    }

    println!("My data: {}",data.clone());
    Ok(&"Daatttata")
}