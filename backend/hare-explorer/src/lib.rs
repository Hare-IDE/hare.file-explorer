#[no_mangle]
pub fn activate(register_command: fn(id:String, callback: fn(data:&String)-> Result<String, String>)) {
    register_command("fileExplorer.renameFolder".to_string(), hello);
}

#[no_mangle]
fn hello(data:&String) -> Result<String, String> {
    println!("{}",data.clone());
    Ok("Hello".into())
}
